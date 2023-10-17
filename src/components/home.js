import React from "react";
import TypeWriter from "typewriter-effect";

const Home = () => {
	return (
		<div>
			<div
				id="home"
				className="row mx-auto"
				style={{
					margin: "0 0 30px 0",
					paddingTop: "70px",
					paddingRight: "50px",
					paddingLeft: "50px",
					paddingBottom: "50px",
					backgroundColor: "darkred",
				}}
			>
				<div className="col-sm-1"></div>
				<div className="col-sm-3">
					<div className="mx-auto d-block" style={{ maxWidth: "300px" }}>
						<img src="./image/Dick_final.png" alt="avatar" className="img-fluid mx-auto d-block" />
					</div>
				</div>
				<div className="col-sm-7">
					<div className="row" style={{ marginTop: "60px" }}>
						<p className="text-center" style={{ color: "white", fontFamily: "Arial", fontSize: "30px" }}>
							Richard Keeton QIDP, MHP
						</p>
					</div>
					<div className="row">
						<span id="title" className="text-center" style={{ color: "white", fontFamily: "Arial", fontSize: "22px" }}>
							<TypeWriter
								options={{
									cursor: "",
								}}
								onInit={(typewriter) => {
									typewriter.typeString("Professional Guardian Agent").start();
								}}
							/>
						</span>
					</div>
					<div className="row" style={{ marginTop: "80px" }}>
						<p className="text-center" style={{ color: "white", fontFamily: "Arial" }}>
							Committed to upholding the standards established by the MN Association for Guardianshop & Conservationship.
						</p>
					</div>
				</div>
				<div className="col-sm-1"></div>
			</div>

			<div id="profile" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px", fontFamily: "Arial" }}>
				<p className="fst-italic fw-bold fs-5">Professional Profile</p>

				<p className="text-break">
					Over the course of thirty-six years, I've dedicated my career to serving individuals with developmental disabilities and related
					conditions including persons with dual diagnoses, and traumatic brain injuries. Through various roles including special education
					teacher, behavior analyst, residential service supervisor, and community services supervisor; I've gained a deep understanding of
					individual needs.
				</p>

				<p className="text-break">
					During my eight years as a special education teacher, I developed a keen ability to tailor education to each individual's needs.
					My five years as a Behavior Analyst 3 and BA3 Supervisor equipped me with the skills and knowledge to manage demanding behaviors
					effectively by the least restrictive means.
				</p>

				<p className="text-break">
					As a residential service supervisor for eight years, I fostered a supportive living environment while coordinating the least
					restrictive services with families, guardians, case managers, and medical professionals. My dedication continued in my role as a
					community service supervisor for eleven years, collaborating closely with various stakeholders such as case managers, supported
					employment staff, and medical teams. This collaboration included developing Minnesota state-run adult foster care residential
					services tailored to the person centered needs of individuals with challenging behavior.
				</p>

				<p className="text-break">
					Throughout my career, I have actively engaged with diverse teams, such as the Fergus Falls RTC Facility Review Committee (local
					review team for “high impact” behavior programs), and the Regional Review Committee (state level authorization for behavior
					programs using techniques governed by MN Rule 40 (aversive, deprevational behavior intervention strategies) ensuring due process.
					My commitment to person-centered programs has been reinforced through specialized training, and becoming knowledgeable about the
					therapeutic benefits of medications as well as their side effects.
				</p>

				<p className="text-break">
					This extensive experience and collaboration with all stakeholders has provided me with the steadfast foundation for protecting the
					rights while maximizing the least restrictive services and interventions for persons with cognitive and/or behavioral needs.
					Through comprehensive person centered program coordination and collaboration with all stakeholders, I have upheld a holistic and
					rights-respecting approach, contributing to the maximum quality of life for the individuals who I have served.
				</p>
			</div>

			<hr
				className="text-center m-auto"
				style={{ maxWidth: "1000px", width: "65%", height: "2px", color: "black", backgroundColor: "black" }}
			/>
			<br />

			<div id="qualification" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px", fontFamily: "Arial" }}>
				<p className="fst-italic fw-bold fs-5">Qualifications</p>
				<ul>
					<li key="1">Qualified Intellectual Disabilities Professional (QMRP)</li>
					<li key="2">Mental Health Practitioner</li>
					<li key="3">Developmental Disabilities Waiver Case Manager</li>
				</ul>
			</div>

			<div id="education" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px", fontFamily: "Arial" }}>
				<p className="fst-italic fw-bold fs-5">Education & Training</p>
				<p>Bachelor of Science, Minnesota State University Mankato</p>
				<p>Elementary Education</p>
				<p className="mb-0">Special Education</p>
				<ul>
					<li key="4">Mild to Moderately Mentally Handicapped</li>
					<li key="5">Moderated to Severe Mentally Handicapped</li>
				</ul>

				<p>General/Experimental Psychology</p>
				<p className="mb-0">Graduate Coursework, Minnesota State University Mankato</p>
				<ul>
					<li key="6">Behavioral Psychology</li>
					<li key="7">Abnormal Psychology</li>
				</ul>
				<p className="mb-0">State Operated Services Training Subject Areas</p>
				<ul>
					<li key="8">Traumatic Brain Injury</li>
					<li key="9">Dual Diagnosis</li>
					<li key="10">Medication Side Effects Monitoring</li>
					<li key="11">Person Centered Planning</li>
				</ul>

				<p>
					<a href="https://drive.google.com/file/d/1YM5-m7vdyP3hVjLOQg9DMveelFCCyPRf/view?usp=sharing">View my Resume</a>
				</p>
			</div>

			<div id="service" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px", fontFamily: "Arial" }}>
				<p className="fst-italic fw-bold fs-5">Services Offered</p>
				<ul>
					<li key="12">
						Professional representative providing services to persons with developmental disabilities and traumatic brain Injuries under
						public guardianship, in collaboration with county social service agencies.
					</li>
					<li key="13">
						QIDP program review for persons receiving redidential program services licensed by MN Rules 203 and 245b, in collaboration
						with private rediential providers.
					</li>
					<li key="14">
						Agent providing progessional case management and Rule 203 licensing review services to county social services agencies.
					</li>
				</ul>
			</div>

			<hr
				className="text-center m-auto"
				style={{ maxWidth: "1000px", width: "65%", height: "2px", color: "black", backgroundColor: "black" }}
			/>
			<br />

			<div id="conclusion" className="mx-auto" style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px", fontFamily: "Arial" }}>
				<p className="fst-italic fw-bold fs-5">Conclusion</p>
				<p className="text-break">
					My combination of qualifications, education, and training underscores my dedication to championing the rights and well-being of
					individuals with specialized needs. This combination of preparation and professional expertise positions me as an invaluable asset
					in any team decision course while insuring the rights and due process are focused on in habilitation planning for the assigned
					individuals. Should you wish further information or would like to explore collaboration opportunities, please feel free to reach
					out by phone, text, or email. Together, we can effect transformative change and empower the people we serve.
				</p>
			</div>

			<div
				id="contact"
				className="mx-auto"
				style={{ padding: "0px 70px 0px 70px", maxWidth: "1300px", fontFamily: "Arial", marginBottom: "50px" }}
			>
				<p className="fst-italic fw-bold fs-5">Contact Me</p>
				<div className="row">
					<div className="col">
						<p id="location">Location: Ferfus Falls, Minnesota, USA</p>
						<p style={{ fontFamily: "Arial", marginBottom: 0 }}>
							<span id="phone">Phone: 218-282-5883 </span>(<a href="tel://1-218-282-5883/">Call&nbsp;me</a>)
						</p>
						<span className="font-arial fw-bold" style={{ fontSize: "12px" }}>
							Mobile or installed dialor required
						</span>
						<p>
							<span id="email">Email: RKeeton@LakesAreaGuardian.com </span>(
							<a href="mailto:RKeeton@LakesAreaGuardian.com">Email&nbsp;me</a>)
						</p>
					</div>
					<div className="col qrcode">
						<img src="./image/qrcode.png" alt="QRCode" width={128} height={128} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
