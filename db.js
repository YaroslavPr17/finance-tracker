class Spending{
    constructor(title, money, date){
        this.title = title;
        this.money = money;
        this.date = date;
    }
}

spendings = [new Spending('Initial_spending', 120, new Date())]
limit = -1;


function add(title, money){
    spendings.push(new Spending(title, money, new Date()))
}

function get_all(){
    return [... spendings]
}

function get_limit(){
    return limit;
}

function set_limit(lim){
    limit = lim;
}

function get_spendings_by_date(date){
    filtered_spendings = get_all()
        .filter(spending => spending.date.getFullYear() === date.getFullYear() &&
                            spending.date.getMonth() === date.getMonth() &&
                            spending.date.getDate() === date.getDate());

    return filtered_spendings;
};

module.exports = {
    get_all,
    add,
    get_limit,
    set_limit,
    get_spendings_by_date
}