import { useLocation, useNavigate } from "react-router-dom";
import '../MoreDetails/detailsPageCommon.css';
// import slider1 from '../Assets/1 (1).png';

const DetailsPageCommon = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const topic = queryParams.get("topic");


    return (
        <div className="details-container">
            <h1 className="details-title">{topic}</h1>
            <div className="details-content">
                {topic === "Private Limited Company" && (
                    <p>
                        A <span className="highlight">Private Limited Company</span> is a business structure in India regulated by the Companies Act, 2013. It offers limited liability to its shareholders and requires a minimum of two directors and two shareholders...
                    </p>
                )}

                {topic === "GST Return" && (
                    <>
                        <div className='services'>
                            {/* <h2>Frequently Used Services</h2> */}
                            {/* <img src={slider1} alt="Services Visual" className="section-image" /> */}
                        </div>
                        <h2>📌 What is GST Return Filing?</h2>
                        <p>A GST return is a document that registered taxpayers must file with the GST Department, containing details of their sales, purchases, tax collected, and tax paid.</p>
                        <ul>
                            <li>✅ Smooth input tax credit (ITC) claims</li>
                            <li>✅ Transparency in your business operations</li>
                            <li>✅ Legal compliance and avoidance of penalties</li>
                        </ul>

                        <hr />

                        <h2>👥 Who Should File GST Returns?</h2>
                        <ul>
                            <li>Businesses registered under GST</li>
                            <li>Traders, service providers, and manufacturers</li>
                            <li>E-commerce sellers</li>
                            <li>Freelancers and agencies</li>
                            <li>Exporters</li>
                            <li>Composition scheme holders</li>
                        </ul>
                        <p><strong>Note:</strong> Even if there is no transaction, a NIL return must be filed.</p>

                        <hr />

                        <h2>📅 Types of GST Returns We File</h2>
                        <div className="table-responsive">
                            <table className="styled-table">
                                <thead>
                                    <tr>
                                        <th>Return Type</th>
                                        <th>Form</th>
                                        <th>Who Should File</th>
                                        <th>Filing Frequency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td>GSTR-1</td><td>Outward Supplies</td><td>Regular taxpayers</td><td>Monthly/Quarterly</td></tr>
                                    <tr><td>GSTR-3B</td><td>Summary Return</td><td>Regular taxpayers</td><td>Monthly</td></tr>
                                    <tr><td>GSTR-4</td><td>Composition scheme holders</td><td>Quarterly</td></tr>
                                    <tr><td>GSTR-9</td><td>Annual Return</td><td>Turnover &gt; ₹2 Cr</td><td>Annually</td></tr>
                                    <tr><td>GSTR-9C</td><td>Reconciliation Statement</td><td>Audited businesses</td><td>Annually</td></tr>
                                    <tr><td>GSTR-10</td><td>Final Return</td><td>On registration cancellation</td><td>One-time</td></tr>
                                    <tr><td>GSTR-11</td><td>UIN Refund Claims</td><td>UIN holders</td><td>As applicable</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <h2>⏰ Important GST Filing Due Dates</h2>
                        <div className="table-responsive">
                            <table className="styled-table">
                                <thead>
                                    <tr><th>Return</th><th>Frequency</th><th>Due Date</th></tr>
                                </thead>
                                <tbody>
                                    <tr><td>GSTR-1</td><td>Monthly</td><td>11th of next month</td></tr>
                                    <tr><td>GSTR-3B</td><td>Monthly</td><td>20th/22nd/24th of next month</td></tr>
                                    <tr><td>GSTR-4</td><td>Quarterly</td><td>18th of next quarter</td></tr>
                                    <tr><td>GSTR-9</td><td>Annual</td><td>31st December of following FY</td></tr>
                                </tbody>
                            </table>
                        </div>

                        <hr />

                        <h2>🛡 Why Choose NS Legalhelp for GST Filing?</h2>
                        <ul>
                            <li>✅ Experienced GST Professionals</li>
                            <li>✅ Timely Return Filing</li>
                            <li>✅ Error-Free Input Matching</li>
                            <li>✅ Transparent Pricing</li>
                            <li>✅ Filing Reminders and Support</li>
                        </ul>

                        <hr />

                        <h2>📥 GST Return Filing in 3 Easy Steps</h2>
                        <ol>
                            <li>📤 Upload invoices & documents</li>
                            <li>🧾 We prepare & review your returns</li>
                            <li>✅ Approve and we file them on time</li>
                        </ol>

                        <hr />

                        <h2>❓ FAQs – GST Return Filing</h2>
                        <p><strong>Q. What happens if I miss my GST return?</strong><br />Late filing leads to penalties of ₹50/day (₹20 for NIL returns) and blocks ITC.</p>
                        <p><strong>Q. Do I have to file NIL returns if I had no sales?</strong><br />Yes. NIL GSTR-1 and GSTR-3B must be filed to avoid penalties.</p>
                        <p><strong>Q. Can I get ITC without filing returns?</strong><br />No. You must file GSTR-3B and GSTR-1 on time to claim ITC.</p>

                        <hr />

                        <h2>📞 Still Confused About GST Filing?</h2>
                        <p>We’re here to help your business stay compliant, save time, and avoid penalties.</p>

                        <br />
                    </>
                )}

                {/* You can add more topics with similar structured blocks */}
            </div>
        </div>
    );
};

export default DetailsPageCommon;
