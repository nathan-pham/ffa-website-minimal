// https://replit.com/@phamn23/CSS-Utils#index.js
// definitely needs further testing

const css = (...styles) => {
    const rules = styles.join(" ").split(" ").reverse();
    const merged = [];

    for (const rule of rules) {
        const ruleComponents = rule.split("-");
        let valid = true;

        for (const higher of merged) {
            const higherComponents = higher.split("-");

            if (
                ruleComponents.length == higherComponents.length &&
                ruleComponents[0] == higherComponents[0]
            ) {
                valid = false;
            }
        }

        if (valid) {
            merged.push(rule);
        }
    }

    return merged.join(" ");
};

export default css;
