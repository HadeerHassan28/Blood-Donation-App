import React from "react";
import styles from "./Terms.module.css";
import { useTranslation } from 'react-i18next';

const Terms = () => {
  const {t} = useTranslation();
  return (
    <div class="container">
      <div>
        {" "}
        <h1 class="mt-5 text-danger text-center"> {t("Terms")} &amp; {t("Conditions")} </h1>
        <p class="text-muted fs-5 w-50 mx-auto text-center">
          {" "}
          {t("This stuff is boring, but important. In short, be a decent human being.")}{" "}
        </p>
      </div>

      <div div class="w-75 mx-auto">
        <h2 className="text-black-50">
          {t("Software License and Service Agreement")}
        </h2>
        <p className="text-muted"></p>
        <p className="text-muted">
        {t("Software License and Service Agreement Paragraph")}
        </p>
        <h2 className="text-black-50">{t("Acceptance of the Agreement")}</h2>
        <p className="text-muted">
        {t("Acceptance of the Agreement Paragraph")}
        </p>
        <p className="text-muted">
        {t("Acceptance of the Agreement Paragraph2")}
        </p>
        <h2 className="text-black-50">{t("Eligibility")}</h2>
        <p className="text-muted">
        {t("Eligibility Paragraph")}
        </p>
        <h2 className="text-black-50">{t("Your account")}</h2>
        <p className="text-muted">
        {t("Your account Paragraph")}
        </p>
        <p className="text-muted">
        {t("Your account Paragraph2")}

        </p>
        <h2 className="text-black-50">{t("Scope of License")}</h2>
        <p className="text-muted">
        {t("Scope of License Paragraph")}{" "}
        </p>
        <p>
        {t("Scope of License Paragraph2")}
        </p>
        <h2 className="text-black-50">{t("Restrictions")}</h2>
        <p className="text-muted">
          {t("Without the prior written consent of Save Life Foundation, Inc, you may not and you agree not to:")}
        </p>
        <ul>
          <li>
            {t("(a) Reproduce the Software in whole or in part;")}
            <br />
          </li>
          <li>
            {t("(b) Sub-license, sell, assign, rent, lease, export, import, distribute or transfer or otherwise grant rights to any third party in the Software;")}
            <br />
          </li>
          <li>
          {t("(c) Undertake, arrange, permit or authorize the modification, creation of derivative works or improvements, translation, reverse engineering, decompiling, disassembling, decryption, emulation, hacking, discovery or attempted discovery of the source code or protocols of the Software or any part or features (except the extent permitted by law);")}
            <br />
          </li>
          <li>
            {t("(d) Remove, obscure or alter any copyright notices or other proprietary notices included in the Software;")}
            <br />
          </li>
          <li>
            {t("(e) Use the Software or any part thereof for commercial purpose (including but not limited to any corporate website, government website, financial and educational institution website, business website, or other websites for earnings and profits),unless you have been licensed to.")}
            <br />
          </li>
        </ul>
        <p className="text-muted">
          {t("The restrictions contained herein apply equally to any updates to the Software that you may obtain. If you breach this restriction, you may be subject to prosecution and damages.")}
        </p>
        <h2 className="text-black-50">{t("Consent to Use of Data")}</h2>
        <p className="text-muted">
          {t("You agree that we may collect and use related information, including but not limited to technical information about your mobile device, system, accounts, call duration, IP address, resolution, voice and video quality enhancing parameters, information that is gathered periodically to facilitate the provision of Software updates, product support and other services related to the Software to you (if any). We may use this information and promise to protect the privacy and personal information of users in accordance with the Privacy Policy.")}
        </p>
        <p className="text-muted">
          {t("By using or continuing to use our services, you agree that we collect, use, store, share, transfer and publicly disclose your information in accordance with the Privacy Policy.")}
        </p>
        <h2 className="text-black-50">{t("Modifications")}</h2>
        <p className="text-muted">
          {t("Save Life Foundation, Inc reserves the right to amend this Agreement at any time by publishing the revised Agreement on the website. In the event where the terms of this Agreement are amended and restrict your right, we will show you the amended Agreement by way of push notifications and/or pop-up windows when you log in and the Agreement is amended. Your continued use of the Software shall constitute your acceptance to be bound by the Agreement.")}
        </p>
        <h2 className="text-black-50">{t("Termination")}</h2>
        <p className="text-muted">
        {t("Termination Paragraph")}
        </p>
        <h2 className="text-black-50">{t("Intellectual Property")}</h2>
        <p className="text-muted">
        {t("Intellectual Property Paragraph")}{" "}
        </p>
        <p className="text-muted">
        {t("Intellectual Property Paragraph2")}
        </p>
        <p className="text-muted">
        {t("Intellectual Property Paragraph3")}
        </p>
        <p className="text-muted">
          {t("The Agreement does not grant you any rights in connection with any trademarks or service marks of Save Life Foundation, Inc.")}
        </p>
        <h2 className="text-black-50">{t("In App Purchases")}</h2>
        <p className="text-muted">
        {t("In App Purchases Paragraph")}{" "}
        </p>
        <h2 className="text-black-50">{t("Disclaimers")}</h2>
        <p className="text-muted">
          {t("Disclaimers Paragraph")}
        </p>
        <p className="text-muted">
        {t("Disclaimers Paragraph2")}
        </p>
        <h2 className="text-black-50">{t("Indemnification")}</h2>
        <p className="text-muted">
          {t("Indemnification Paragraph")}
        </p>
        <h2 className="text-black-50">{t("Choice of Law and Jurisdiction")}</h2>
        <p className="text-muted">
          {t("Choice of Law and Jurisdiction Paragraph")}
        </p>
        <p className="text-muted">
          <b>
            <br />
          </b>
        </p>
      </div>
    </div>
  );
};

export default Terms;
