// Define a class for the Opinion Exchange
class OpinionExchange {
    constructor() {
        this.objects = {};
    }

    // Method to add object to chat about 
    addObject(objectName) {
        if (!this.objects[objectName]) {
            this.objects[objectName] = [];
            console.log(`"${objectName}" added to the Opinion Exchange.`);
            showNotification(`"${objectName}" added to the Opinion Exchange.`, 'success');
        } else {
            console.log(`"${objectName}" already exists in the Opinion Exchange.`);
            showNotification(`"${objectName}" already exists in the Opinion Exchange.`, 'error');
        }
    }

    // Method to add opinion
    addOpinion(objectName, opinion) {
        if (this.objects[objectName]) {
            this.objects[objectName].push(opinion);
            console.log(`Opinion added for "${objectName}": "${opinion}"`);
            showNotification(`Opinion added for "${objectName}": "${opinion}"`, 'success');
        } else {
            console.log(`"${objectName}" does not exist in the Opinion Exchange.`);
            showNotification(`"${objectName}" does not exist in the Opinion Exchange.`, 'error');
        }
    }

    // Async function to fetch opinions from JSON file
    async fetchOpinions() {
        const response = await fetch('opinions.json');
        const data = await response.json();
        return data.opinions;
    }
}

// Create an instance of OpinionExchange
const opinionExchange = new OpinionExchange();

// Example usage of fetchOpinions
opinionExchange.fetchOpinions().then(opinions => {
    console.log(opinions); // This will log the opinions fetched from the JSON file
});
