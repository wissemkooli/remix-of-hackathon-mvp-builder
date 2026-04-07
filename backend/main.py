import os
import json
import uuid
from typing import Dict, Any, List

from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_FILE = "db.json"

def load_db() -> Dict[str, Any]:
    if not os.path.exists(DB_FILE):
        return {"users": []}
    try:
        with open(DB_FILE, "r") as f:
            return json.load(f)
    except json.JSONDecodeError:
        return {"users": []}

def save_db(db_data: Dict[str, Any]):
    with open(DB_FILE, "w") as f:
        json.dump(db_data, f, indent=2)

class RegisterRequest(BaseModel):
    email: str
    password: str
    name: str = ""
    profileType: str = "student"
    extra_data: dict = {}

class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/api/auth/register")
def register(req: RegisterRequest):
    db = load_db()
    
    # Simple if statement security: check if user exists
    for u in db["users"]:
        if u["email"] == req.email:
            raise HTTPException(status_code=400, detail="User already exists")
    
    user_id = str(uuid.uuid4())
    new_user = {
        "id": user_id,
        "email": req.email,
        "password": req.password, # Fake security: plain text
        "name": req.name,
        "profileType": req.profileType,
        "extra_data": req.extra_data
    }
    
    db["users"].append(new_user)
    save_db(db)
    
    # We use user_id as a "fake" token
    return {"token": user_id, "user": new_user}

@app.post("/api/auth/login")
def login(req: LoginRequest):
    db = load_db()
    for u in db["users"]:
        if u["email"] == req.email and u["password"] == req.password:
            return {"token": u["id"], "user": u}
            
    raise HTTPException(status_code=401, detail="Invalid credentials")

@app.get("/api/auth/me")
def get_me(authorization: str = Header(None)):
    if not authorization:
        raise HTTPException(status_code=401, detail="No token provided")
    
    token = authorization.replace("Bearer ", "")
    db = load_db()
    for u in db["users"]:
        if u["id"] == token:
            return {"user": u}
            
    raise HTTPException(status_code=401, detail="Invalid token")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
