# A simple demonstration creates an API on Alibaba Cloud Function Compute
This GIT demonstrate how to implement a ToDo List API in NodeJS and deploy to Alibaba Cloud Function Compute.

## index.js
index.js is currently set as the entry point of the API.  In the source code, you can find the raw-body framework at the beginning of the source code.

- GET /list - Return the list
- POST /add - Add an item to the list
- PUT /remove - Remove the select item from the list

## todo.js
Managing the list and the functions.  
