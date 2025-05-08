{
    //  access modifier

    class BankAccount {
        public readonly _id: number;
        public name: string;
        private _balance: number; 
        protected expireDate: string;

        constructor(_id: number, name: string, _balance: number, expireDate: string){
            this._id = _id;
            this.name = name;
            this._balance = _balance;
            this.expireDate = expireDate;
        }

        get_balance(){
            return this._balance;
        }

        addDeposit(amount: number){
            this._balance = this._balance + amount;
        }

    }

    class AccountInfo extends BankAccount{
        getExpireDate() : string{           
            return this.getExpireDate();
        }
    }

    const goribAccount = new BankAccount(123, "Md. Tohin", 20, "20 June 2025");
    let my_balance = goribAccount.get_balance();
    console.log(my_balance);
    
    goribAccount.addDeposit(30)
    my_balance = goribAccount.get_balance();
    console.log(my_balance);

    
}