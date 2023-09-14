import { Routes as ReactRouterRoutes, Route } from "react-router-dom";
import ButtonDocs from "../Components/ButtonDocs";
import CardDocs from "../Components/CardDocs";
import ChangePasswordPageDocs from "../Components/ChangePasswordPageDocs";
import CheckboxDocs from "../Components/CheckboxDocs";
import ColumnChartDocs from "../Components/ColumnChartDocs";
import ComboBoxDocs from "../Components/ComboBoxDocs";
import CssUtilities from "../CssUtilities";
import CurrencyFieldDocs from "../Components/CurrencyFieldDocs";
import DateFieldDocs from "../Components/DateFieldDocs";
import DesignElements from "../DesignElements";
import DialogDocs from "../Components/DialogDocs";
import FabDocs from "../Components/FabDocs";
import ForgotPasswordPageDocs from "../Components/ForgotPasswordPageDocs";
import FormDocs from "../Components/FormDocs";
import HeaderDocs from "../Components/HeaderDocs";
import Home from "../Home";
import IconDocs from "../Components/IconDocs";
import ImageUploadDocs from "../Components/ImageUploadDocs";
import LineChartDocs from "../Components/LineChartDocs";
import LinkDocs from "../Components/LinkDocs";
import NavDocs from "../Components/NavDocs";
import PaginationDocs from "../Components/PaginationDocs";
import PaperDocs from "../Components/PaperDocs";
import QuickNavDocs from "../Components/QuickNavDocs";
import RadioButtonDocs from "../Components/RadioButtonDocs";
import ResendVerificationPageDocs from "../Components/ResendVerificationPageDocs";
import ResetPasswordPageDocs from "../Components/ResetPasswordPageDocs";
import SelectDocs from "../Components/SelectDocs";
import ShareButtonDocs from "../Components/ShareButtonDocs";
import SignInPageDocs from "../Components/SignInPageDocs";
import SignUpPageDocs from "../Components/SignUpPageDocs";
import SpinnerDocs from "../Components/SpinnerDocs";
import TextAreaDocs from "../Components/TextAreaDocs";
import TextFieldDocs from "../Components/TextFieldDocs";
import ToggleDocs from "../Components/ToggleDocs";
import Typography from "../Typography";
import VerifyPageDocs from "../Components/VerifyPageDocs";
import WordCloudDocs from "../Components/WordCloudDocs";
import _404 from "../_404";

export default function Routes() {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="components/button" element={<ButtonDocs />} />
      <Route path="components/card" element={<CardDocs />} />
      <Route path="components/checkbox" element={<CheckboxDocs />} />
      <Route path="components/column-chart" element={<ColumnChartDocs />} />
      <Route path="components/combo-box" element={<ComboBoxDocs />} />
      <Route path="components/currency-field" element={<CurrencyFieldDocs />} />
      <Route path="components/date-field" element={<DateFieldDocs />} />
      <Route path="components/dialog" element={<DialogDocs />} />
      <Route path="components/fab" element={<FabDocs />} />
      <Route path="components/form" element={<FormDocs />} />
      <Route path="components/header" element={<HeaderDocs />} />
      <Route path="components/icon" element={<IconDocs />} />
      <Route path="components/image-upload" element={<ImageUploadDocs />} />
      <Route path="components/line-chart" element={<LineChartDocs />} />
      <Route path="components/link" element={<LinkDocs />} />
      <Route path="components/nav" element={<NavDocs />} />
      <Route path="components/pagination" element={<PaginationDocs />} />
      <Route path="components/paper" element={<PaperDocs />} />
      <Route path="components/quick-nav" element={<QuickNavDocs />} />
      <Route path="components/radio-button" element={<RadioButtonDocs />} />
      <Route path="components/select" element={<SelectDocs />} />
      <Route path="components/share-button" element={<ShareButtonDocs />} />
      <Route path="components/spinner" element={<SpinnerDocs />} />
      <Route path="components/text-area" element={<TextAreaDocs />} />
      <Route path="components/text-field" element={<TextFieldDocs />} />
      <Route path="components/word-cloud" element={<WordCloudDocs />} />
      <Route path="css-utilities" element={<CssUtilities />} />
      <Route path="design-elements" element={<DesignElements />} />
      <Route path="typography" element={<Typography />} />
      <Route
        path="pages/change-password"
        element={<ChangePasswordPageDocs />}
      />
      <Route
        path="pages/forgot-password"
        element={<ForgotPasswordPageDocs />}
      />
      <Route
        path="pages/resend-verification"
        element={<ResendVerificationPageDocs />}
      />
      <Route path="pages/reset-password" element={<ResetPasswordPageDocs />} />
      <Route path="pages/sign-in" element={<SignInPageDocs />} />
      <Route path="pages/sign-up" element={<SignUpPageDocs />} />
      <Route path="components/toggle" element={<ToggleDocs />} />
      <Route path="pages/verify" element={<VerifyPageDocs />} />
      <Route path="*" element={<_404 />} />
    </ReactRouterRoutes>
  );
}
