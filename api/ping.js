// api/ping.js
export default (req, res) => {
    try {
        res.status(200).json({ message: "furkan's gallery website" });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
