import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";
import Iter "mo:base/Iter";


actor Token {
    var owner : Principal = Principal.fromText("dqi3y-bgvvv-3guyq-rdkhs-wmnps-rjlvq-644dn-v65ld-dyaxo-opjc4-oqe");
    var totalSupply : Nat = 1000000000;
    var symbol : Text = "ZEEK";
   private stable var balanceEnteries: [(Principal, Nat)] = [];
   private var balances = HashMap.HashMap<Principal, Nat>(1, Principal.equal, Principal.hash);
   if (balances.size() < 1) {
            let ownerBalance = totalSupply;
            balances.put(owner, ownerBalance);
        };

    

    public query func balanceOf(who: Principal) : async Nat {
       let balance : Nat = switch (balances.get(who)) {
           case null 0;
           case (?result) result;
        };
        return balance;
    };

    public query func getSymbol() : async Text {
        return symbol;
    };

    public shared(msg) func payOut() : async Text {
        Debug.print(debug_show(msg.caller));
        if (balances.get(msg.caller) == null) {
            let amount = 10000;
       let result = await transfer(msg.caller, amount);
        return result;
        } else {
            return "Already paid out";
        };
       
    };

    public shared(msg) func transfer(to: Principal, amount: Nat) : async Text {
      let fromBalance = await balanceOf(msg.caller);
      if (fromBalance > amount) {
        let newFromBalance : Nat = fromBalance - amount;
        balances.put(msg.caller, newFromBalance);
        let toBalance = await balanceOf(to);
        let newToBalance : Nat = toBalance + amount;
        balances.put(to, newToBalance);
        return "success";
      } else {
        return "Insufficient balance";
      }
    };

    system func preupgrade() {
    balanceEnteries := Iter.toArray(balances.entries());
    };

     system func postupgrade() {
        balances :=  HashMap.fromIter<Principal, Nat>(balanceEnteries.vals(), 1, Principal.equal, Principal.hash);
        if (balances.size() < 1) {
            let ownerBalance = totalSupply;
            balances.put(owner, ownerBalance);
        }
    };
    
};