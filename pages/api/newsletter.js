function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    console.log(req.body);
    if (!userEmail || !userEmail.includes("@")) {
      res
        .status(422)
        .json({ message: "Invalid email address.", email: userEmail });
      return;
    }

    res.status(201).json({ message: "Signed up" });
  }
}

export default handler;
