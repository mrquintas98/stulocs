const placesRouter = require("./routes/placesRoutes");
const tagsRouter = require(".routes/tagsRoutes");

app.use("/api/places",placesRouter);
app.use("/api/tags", tagsRouter);
