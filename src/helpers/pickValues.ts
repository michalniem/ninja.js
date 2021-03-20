const pickValues = (object: Record<string, unknown> = {}, entries: string[] = []) => {
    if (entries.length === 0) {
        return Object.values(object);
    } else {
        return Object.entries(object).filter(entry => entries.includes(entry[0])).map(pickedEntry => pickedEntry[1]);
    }
}

export default pickValues;