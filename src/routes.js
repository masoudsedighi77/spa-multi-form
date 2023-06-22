import Step1 from "./pages/step1/Step1";
import Step2 from "./pages/step2/Step2";
import Step3 from "./pages/step3/Step3";
import Step4 from "./pages/step4/Step4";
import Confirmed from "./pages/confirmed/Confirmed";
let routes = [
  { path: "/", element: <Step1 /> },
  { path: "/step2", element: <Step2 /> },
  { path: "/step3", element: <Step3 /> },
  { path: "/step4", element: <Step4 /> },
  { path: "/confirmed", element: <Confirmed /> },
];
export default routes;
