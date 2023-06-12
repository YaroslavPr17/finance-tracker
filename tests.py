import requests

def test_set_limit(limit):
    print('----- SET LIMIT -----')
    response = requests.post('http://localhost:3000/limit', json={'limit': limit})
    print(f'{response.text}\nstatus_code={response.status_code}', end='\n\n')
    
def test_get_limit():
    print('----- GET LIMIT -----')
    response = requests.get('http://localhost:3000/limit')
    print(f'{response.text}\nstatus_code={response.status_code}', end='\n\n')
    
def test_get_all():
    print('----- GET ALL SPENDINGS -----')
    response = requests.get('http://localhost:3000/spendings')
    print(f'{response.text}\nstatus_code={response.status_code}', end='\n\n')
    
def test_add_spending(title, money):
    print('----- ADD SPENDING -----')
    response = requests.post('http://localhost:3000/spendings/new', json={'title': title, 'money': money})
    print(f'{response.text}\nstatus_code={response.status_code}', end='\n\n')
    
def test_filter_spending_by_date(day, month, year):
    print('----- FILTER SPENDING -----')
    response = requests.post('http://localhost:3000/spendings/get-by-date', json={'year': year, 'month': month, 'date': day})
    print(f'Date: {day:02}.{month:02}.{year:04}')
    print(f'{response.text}\nstatus_code={response.status_code}', end='\n\n')
    
test_get_limit()
test_set_limit(100)
test_get_limit()
test_get_all()
test_add_spending('Ааааавтомобииль', 3_030_000)
test_add_spending('Золото, бриллианты', 3.080)
test_get_all()
test_filter_spending_by_date(21, 11, 2002)
test_filter_spending_by_date(12, 6, 2023)
