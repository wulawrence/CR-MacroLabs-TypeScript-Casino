class Startup {
    public static main(): void {
        var button = document.getElementById("submit");
        var userInput: HTMLInputElement = <HTMLInputElement> document.getElementById("user_input");
        var button = document.getElementById("submit_button");
        const welcomeCasino = document.getElementById("display");
        welcomeCasino.innerText += "Welcome to the Zip Code Casino! Would you like to play?";
        welcomeCasino.innerText += "\nPress Y/N to play.";
        button.addEventListener("click", (e:Event)=> putToDisplay(userInput.value));
    }
}
    var webElement = document.getElementById("display");
    function putToDisplay(text: string){
        webElement.innerText += "\n";
        webElement.innerText += text;
    }
    
Startup.main();
