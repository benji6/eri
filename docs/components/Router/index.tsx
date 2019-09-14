import { Router as ReachRouter } from '@reach/router'
import * as React from 'react'
import _404 from '../_404'
import ButtonDocs from '../Components/ButtonDocs'
import CardDocs from '../Components/CardDocs'
import ComponentsHome from '../Components/ComponentsHome'
import DesignElements from '../DesignElements'
import DialogDocs from '../Components/DialogDocs'
import FabDocs from '../Components/FabDocs'
import FormDocs from '../Components/FormDocs'
import Home from '../Home'
import IconDocs from '../Components/IconDocs'
import LinkDocs from '../Components/LinkDocs'
import PagesHome from '../Components/PagesHome'
import PaginationDocs from '../Components/PaginationDocs'
import PaperDocs from '../Components/PaperDocs'
import SignInPageDocs from '../Components/SignInPageDocs'
import SignUpPageDocs from '../Components/SignUpPageDocs'
import SpinnerDocs from '../Components/SpinnerDocs'
import Typography from '../Typography'
import VerifyPageDocs from '../Components/VerifyPageDocs'

export default function Router() {
  return (
    <ReachRouter>
      <_404 default />
      <Home path="/" />
      <DesignElements path="design-elements" />
      <Typography path="typography" />
      <ComponentsHome path="components" />
      <ButtonDocs path="components/button" />
      <CardDocs path="components/card" />
      <DialogDocs path="components/dialog" />
      <FabDocs path="components/fab" />
      <FormDocs path="components/form" />
      <IconDocs path="components/icon" />
      <LinkDocs path="components/link" />
      <PaginationDocs path="components/pagination" />
      <PaperDocs path="components/paper" />
      <SpinnerDocs path="components/spinner" />
      <PagesHome path="pages" />
      <SignInPageDocs path="pages/sign-in" />
      <SignUpPageDocs path="pages/sign-up" />
      <VerifyPageDocs path="pages/verify" />
    </ReachRouter>
  )
}
