// add whatever parameters you deem necessary
function constructNote(message, letters) {
    const letterFreq = {};
    const messageFreq = {};

    for (let char of letters) {
        letterFreq[char] = ++letterFreq[char] || 1;
    }

    for (let char of message) {
        messageFreq[char] = ++messageFreq[char] || 1;
    }

    for (let char in messageFreq) {
        if (!letterFreq[char]) {
            return false;
        }
        if (messageFreq[char] > letterFreq[char]) {
            return false;
        }
    }

    return true;
}