import "./style.css";
import { BrowserRouter, Link } from "react-router";
import { Header, Nav } from "../../../src";
import { StrictMode, useState } from "react";
import Routes from "../Routes";

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavClose = () => setIsNavOpen(false);
  const handleNavOpen = () => setIsNavOpen(true);

  return (
    <StrictMode>
      <BrowserRouter>
        <Header>
          <h1>
            <Link to="/">Eri</Link>
          </h1>
          <Nav.Button onClick={handleNavOpen} />
        </Header>
        <Nav onClose={handleNavClose} open={isNavOpen}>
          <Nav.List>
            <Nav.Link onClick={handleNavClose} to="/">
              Home
            </Nav.Link>
            <Nav.Link onClick={handleNavClose} to="/design-elements">
              Design elements
            </Nav.Link>
            <Nav.Link onClick={handleNavClose} to="/typography">
              Typography
            </Nav.Link>
            <Nav.Link onClick={handleNavClose} to="/css-utilities">
              CSS utilities
            </Nav.Link>
            <Nav.SubList heading="Components">
              <Nav.Link onClick={handleNavClose} to="/components/button">
                Button
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/card">
                Card
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/column-chart">
                Chart.ColumnChart
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/line-chart">
                Chart.LineChart
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/checkbox">
                Checkbox
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/combo-box">
                ComboBox
              </Nav.Link>
              <Nav.Link
                onClick={handleNavClose}
                to="/components/currency-field"
              >
                CurrencyField
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/date-field">
                DateField
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/dialog">
                Dialog
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/fab">
                Fab
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/form">
                Form
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/header">
                Header
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/icon">
                Icon
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/image-upload">
                ImageUpload
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/link">
                Link
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/nav">
                Nav
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/pagination">
                Pagination
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/paper">
                Paper
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/quick-nav">
                QuickNav
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/radio-button">
                RadioButton
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/select">
                Select
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/share-button">
                ShareButton
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/spinner">
                Spinner
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/text-area">
                TextArea
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/text-field">
                TextField
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/toggle">
                Toggle
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/components/word-cloud">
                WordCloud
              </Nav.Link>
            </Nav.SubList>
            <Nav.SubList heading="Pages">
              <Nav.Link onClick={handleNavClose} to="/pages/change-password">
                ChangePassword
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/pages/forgot-password">
                ForgotPassword
              </Nav.Link>
              <Nav.Link
                onClick={handleNavClose}
                to="/pages/resend-verification"
              >
                ResendVerification
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/pages/reset-password">
                ResetPassword
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/pages/sign-in">
                SignIn
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/pages/sign-up">
                SignUp
              </Nav.Link>
              <Nav.Link onClick={handleNavClose} to="/pages/verify">
                Verify
              </Nav.Link>
            </Nav.SubList>
          </Nav.List>
        </Nav>
        <main>
          <Routes />
        </main>
      </BrowserRouter>
    </StrictMode>
  );
}
