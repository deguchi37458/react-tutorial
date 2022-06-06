import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Featured from "./pages/Featured";
import Archives from "./pages/Archives";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);
ReactDOM.render(
  <Router>
    <Layout>
        <Routes>
            <Route exact path="/" element={<Featured />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    </Layout>
  </Router>,
app);