import React from "react";

const Privacy = () => {
	return (
		<>
			<div
				id="privacy"
				className="row mx-auto"
				style={{
					margin: "0 0 30px 0",
					paddingTop: "120px",
					paddingRight: "50px",
					paddingLeft: "50px",
					paddingBottom: "30px",
					backgroundColor: "darkred",
				}}
			>
				<p className="text-center" style={{ color: "white", fontFamily: "Arial", fontSize: "34px" }}>
					Privacy Policy
				</p>
				<div id="protect_policy" className="mx-auto text-white" style={{ paddingTop: "20px", maxWidth: "1000px" }}>
					<p className="fst-italic fw-bold fs-5 text-center" style={{ fontFamily: "Arial" }}>
						We are committed to protecting your privacy
					</p>

					<p className="text-break" style={{ fontFamily: "Arial", fontSize: "15px" }}>
						We collect the minimum amount of information about you that is necessary to provide you with satisfactory service. This policy
						indicates the type of information and how it will be used that may be collected about you.
					</p>
				</div>
			</div>

			<div id="information_collected" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px" }}>
				<p className="fst-italic fw-bold fs-5" style={{ fontFamily: "Arial" }}>
					Information Collected
				</p>

				<p className="text-break" style={{ fontFamily: "Arial" }}>
					We may collect any or all of the information that you give us, including your name, address, telephone number, and email address,
					together with data about your use of the website. Other information that may be needed from time to time to process a request may
					also be collected.
				</p>
			</div>

			<div id="information_use" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px" }}>
				<p className="fst-italic fw-bold fs-5" style={{ fontFamily: "Arial" }}>
					Information Use
				</p>

				<p className="text-break" style={{ fontFamily: "Arial" }}>
					We use the information collected primarily to process the task for which you visited the website. We may retain and use your email
					address and phone number to contact you in the event that you initiate communication with us by using the phone or email link on
					our website. We may also use the information to contact you and inform you of developments associated with us. Data collected in
					the UK is held in accordance with the Data Protection Act. All reasonable precautions are taken to prevent unauthorized access to
					this information. This safeguard may require you to provide additional forms of identity should you wish to obtain information
					about your personal details.
				</p>
			</div>

			<div id="cookies" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px" }}>
				<p className="fst-italic fw-bold fs-5" style={{ fontFamily: "Arial" }}>
					Cookies
				</p>

				<p className="text-break" style={{ fontFamily: "Arial" }}>
					Your Internet browser has the built-in facility for storing small files, "cookies," that hold information to maximize your
					browsing experience. Our website takes advantage of this facility to further enhance the function and operation of the website.
					You have the ability to prevent your computer from accepting cookies, but if you do, certain functionality on the website may be
					impaired.
				</p>
			</div>

			<div id="disclosing_information" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px" }}>
				<p className="fst-italic fw-bold fs-5" style={{ fontFamily: "Arial" }}>
					Disclosing Information
				</p>

				<p className="text-break" style={{ fontFamily: "Arial" }}>
					We do not disclose any personal information obtained about you from this website to third parties. You may request that we remove
					any information about you that we may have in our records. If at any time in the future we wish to disclose information collected
					on this website to any third party, it would only be with your knowledge and consent.
				</p>
				<p className="text-break" style={{ fontFamily: "Arial" }}>
					We may from time to time provide information of a general nature to third parties, for example, the number of individuals visiting
					our website. Any such information will not include personal details that could identify website users.
				</p>
			</div>

			<div id="change_policy" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px" }}>
				<p className="fst-italic fw-bold fs-5" style={{ fontFamily: "Arial" }}>
					Changes To This Policy
				</p>
				<p className="text-break" style={{ fontFamily: "Arial" }}>
					Any changes to our privacy policy will be placed here and will supersede this version of our policy. We will take reasonable steps
					to draw your attention to any changes in our policy. However, to be certain, we suggest that you read this document each time you
					use the website to ensure that it still meets with your approval.
				</p>
			</div>

			<div id="contact_us" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px", marginBottom: "50px" }}>
				<p className="fst-italic fw-bold fs-5" style={{ fontFamily: "Arial" }}>
					Contacting Us
				</p>
				<p className="text-break" style={{ fontFamily: "Arial" }}>
					If you have any questions about our Privacy Policy, or if you want to know what information we have collected about you, please
					email us at Admin@LakesAreaGuardian.com. You can also correct any factual errors in that information or require us to remove your
					details form any list under our control.
				</p>
			</div>
		</>
	);
};

export default Privacy;
