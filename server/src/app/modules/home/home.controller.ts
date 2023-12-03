import ErrorsWrapper from "../../errors/wrapper.error";


const homeController = ErrorsWrapper(async (req, res, next) => {

	res.status(200).json({
		status: "success",
	});
});

const homeControllers = { homeController };

export default homeControllers;
