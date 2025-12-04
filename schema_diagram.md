# Database Schema

## User Collection
```json
{
  "_id": "ObjectId",
  "name": "String",
  "email": "String (Unique)",
  "password": "String (Hashed)",
  "role": "String ('interviewer' | 'interviewee')",
  "skills": ["String"],
  "experience": "String",
  "availability": "String",
  "createdAt": "Date",
  "updatedAt": "Date"
}
```

## Session Collection
```json
{
  "_id": "ObjectId",
  "interviewer": "ObjectId (Ref: User)",
  "interviewee": "ObjectId (Ref: User)",
  "roomId": "String",
  "status": "String ('scheduled' | 'completed' | 'cancelled')",
  "feedback": {
    "rating": "Number (1-5)",
    "strengths": "String",
    "improvements": "String"
  },
  "createdAt": "Date",
  "updatedAt": "Date"
}
```
