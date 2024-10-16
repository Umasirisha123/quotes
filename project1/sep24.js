var globalScopeVar = "Hi this is Global Scope Var"

function test(){
    console.log(globalScopeVar+"Inside Function")
}

test()

console.log(globalScopeVar+"outside Function")