import * as React from "react";
import { Router as ReachRouter, Redirect } from "@reach/router";
import BarChartDocs from "../Components/BarChartDocs";
import ButtonDocs from "../Components/ButtonDocs";
import CardDocs from "../Components/CardDocs";
import ComponentsHome from "../Components/ComponentsHome";
import DesignElements from "../DesignElements";
import DialogDocs from "../Components/DialogDocs";
import FabDocs from "../Components/FabDocs";
import ForgotPasswordPageDocs from "../Components/ForgotPasswordPageDocs";
import FormDocs from "../Components/FormDocs";
import HeaderDocs from "../Components/HeaderDocs";
import Home from "../Home";
import IconDocs from "../Components/IconDocs";
import LineChartDocs from "../Components/LineChartDocs";
import LinkDocs from "../Components/LinkDocs";
import MainDocs from "../Components/MainDocs";
import MenuDocs from "../Components/MenuDocs";
import PagesHome from "../Components/PagesHome";
import PaginationDocs from "../Components/PaginationDocs";
import PaperDocs from "../Components/PaperDocs";
import QuickNavDocs from "../Components/QuickNavDocs";
import ResendVerificationPageDocs from "../Components/ResendVerificationPageDocs";
import ResetPasswordPageDocs from "../Components/ResetPasswordPageDocs";
import ShareButtonDocs from "../Components/ShareButtonDocs";
import SignInPageDocs from "../Components/SignInPageDocs";
import SignUpPageDocs from "../Components/SignUpPageDocs";
import SpinnerDocs from "../Components/SpinnerDocs";
import Typography from "../Typography";
import VerifyPageDocs from "../Components/VerifyPageDocs";
import WordCloudDocs from "../Components/WordCloudDocs";
import _404 from "../_404";

export default function Router() {
  return (
    <ReachRouter primary={false}>
      <_404 default />
      <Redirect from="/forgot-password" to="/pages/forgot-password" />
      <Redirect from="/resend-verification" to="/pages/resend-verification" />
      <Redirect from="/reset-password" to="/pages/reset-password" />
      <Redirect from="/sign-in" to="/pages/sign-in" />
      <Redirect from="/sign-up" to="/pages/sign-up" />
      <Redirect from="/verify" to="/pages/verify" />
      <Home path="/" />
      <DesignElements path="design-elements" />
      <Typography path="typography" />
      <ComponentsHome path="components" />
      <BarChartDocs path="components/bar-chart" />
      <ButtonDocs path="components/button" />
      <CardDocs path="components/card" />
      <DialogDocs path="components/dialog" />
      <FabDocs path="components/fab" />
      <FormDocs path="components/form" />
      <HeaderDocs path="components/header" />
      <IconDocs path="components/icon" />
      <LineChartDocs path="components/line-chart" />
      <LinkDocs path="components/link" />
      <MainDocs path="components/main" />
      <MenuDocs path="components/menu" />
      <PaginationDocs path="components/pagination" />
      <PaperDocs path="components/paper" />
      <ShareButtonDocs path="components/share-button" />
      <SpinnerDocs path="components/spinner" />
      <PagesHome path="pages" />
      <QuickNavDocs path="components/quick-nav" />
      <WordCloudDocs path="components/word-cloud" />
      <ForgotPasswordPageDocs path="pages/forgot-password" />
      <ResendVerificationPageDocs path="pages/resend-verification" />
      <ResetPasswordPageDocs path="pages/reset-password" />
      <SignInPageDocs path="pages/sign-in" />
      <SignUpPageDocs path="pages/sign-up" />
      <VerifyPageDocs path="pages/verify" />
    </ReachRouter>
  );
}
