function getInputValue(elementID: string): string {
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
    return inputElement.value;
}

function logger(message: string) {
    console.log(message);
}

export { getInputValue as getValue, logger };

// class Utility {
//     static getInputValue(elementID: string): string {
//         const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
//         return inputElement.value;
//     }
// }