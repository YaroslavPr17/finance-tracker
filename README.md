# finance-tracker
The Repository is created to store the hometask for HSE Web-course on Node.js 

### Testing approach
```powershell
PS C:\Users\Yaroslav Pristalov\...\Web\finance-tracker> python tests.py   
----- GET LIMIT -----
"-1"
status_code=200

----- SET LIMIT -----
OK
status_code=200

----- GET LIMIT -----
"100"
status_code=200

----- GET ALL SPENDINGS -----
[{"title":"Initial_spending","money":120,"date":"2023-06-12T16:58:41.448Z"}]
status_code=200

----- ADD SPENDING -----
Created
status_code=201

----- ADD SPENDING -----
Created
status_code=201

----- GET ALL SPENDINGS -----
[{"title":"Initial_spending","money":120,"date":"2023-06-12T16:58:41.448Z"},
 {"title":"Ааааавтомобииль","money":3030000,"date":"2023-06-12T16:59:20.234Z"},
 {"title":"Золото, бриллианты","money":3.08,"date":"2023-06-12T16:59:20.238Z"}]
status_code=200

----- FILTER SPENDING -----
Date: 21.11.2002
[]
status_code=201

----- FILTER SPENDING -----
Date: 12.06.2023
[{"title":"Initial_spending","money":120,"date":"2023-06-12T16:58:41.448Z"},
 {"title":"Ааааавтомобииль","money":3030000,"date":"2023-06-12T16:59:20.234Z"},
 {"title":"Золото, бриллианты","money":3.08,"date":"2023-06-12T16:59:20.238Z"}]
status_code=201
```
