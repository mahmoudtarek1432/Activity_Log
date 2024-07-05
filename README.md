Stack Used:
Next.js
Zustand
Tailwind css

EndPoints: 
Get: /api/events
params:
[
  size,
  page,
  searchKey,
  actor_id,
  action_id,
  target_id,
  name
]

Post: /api/events
body example:

{
    "id": "dummy",
    "actionId": 1,
    "userId": "dummy",
    "targetId": "dummy",
    "createdOn": "2024-07-05T18:10:34.970Z"
}
