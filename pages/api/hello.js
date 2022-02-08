export default function helloAPI(req, res) {
    if(req.method == "POST") {
        try {
            const { email } = JSON.parse(req.body)
            res.status(200).json({ email })
        } catch (e) {
            res.status(500).json({ error: "failed to process email" });
        }
    }
}