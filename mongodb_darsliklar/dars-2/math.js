export class MathClass{
    add(a,b){
        return a+b
    }
    minus(a,b){
        return a-b
    }
    multiplication(a,b){
        return a*b
    }
    division(a,b){
        if(b!=0){
            return a/b
        }else{
            return `not division this ${b}`
        }
    }
}