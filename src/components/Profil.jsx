function NavBar() {
  return (
    <ul>
      <li>
        <a class="active" href="#home">
          Home
        </a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
    </ul>
  );
}

function ProfilResume() {
  return (
    <div className="card-profile">
      <h1 style={{ textAlign: "center" }}>Curriculum vitae 2024</h1>
      <br />
      <img
        id="foto-profil"
        width="50%"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <h2>Baharian Diko</h2>
      <p>
        Hello! I'm a data-driven professional with a passion for transforming
        complex data into actionable insights and designing user-centric digital
        experiences. With hands-on experience in data visualization, analytics,
        and UI/UX design, I bring a unique blend of technical expertise and
        creative problem-solving to every project.
      </p>
      <a
        className="btn btn-outline-primary"
        href="https://www.linkedin.com/in/bahariandiko/"
        target="_blank"
        role="button"
      >
        Connect to My Linkedin Profile!
      </a>
    </div>
  );
}

function EducationResume() {
  return (
    <div className="card-education">
      <div className="edu">
        <img
          src="https://upload.wikimedia.org/wikipedia/id/0/01/Institut_Teknologi_Sepuluh_Nopember_seal.svg"
          alt=""
        />
        <h3>Institut Teknologi Sepuluh Nopember</h3>
        <p>Sistem Informasi 2020 - 2024</p>
        <p>IPK 3.63/4.00</p>
      </div>
      <hr />
      <div className="edu">
        <img
          src="https://profile.smkn1cibinong.sch.id/wp-content/uploads/2023/02/cropped-logo-SMKN-1-Cbn.png"
          alt=""
        />
        <h3>SMK Negeri 1 Cibinong</h3>
        <p>Rekayasa Perangkat Lunak 2017-2020</p>
      </div>
    </div>
  );
}

function OtherCards() {
  return (
    <>
      <div className="card-other">
        <div className="card-workexperience">
          <h2>Work Experience</h2>
          <br />
          <div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-6 col-md-4">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_k-xALPS3HzL1-WOw6Rt0YwGfLXe94oXm8fsm188tACmEg=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                />
              </div>
              <div className="col-md-8" style={{ textAlign: "left" }}>
                <h5>Bank Syariah Indonesia</h5>
                <p>Officer Development Program (Nov 2024 - Present)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-volunteering">
          <h2>Volunteering</h2>
          <br />
          <div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-6 col-md-4">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkkqgXWhl67N42ugmWFabH8yKKpPAjN78Dwg&s"
                  alt=""
                />
              </div>
              <div className="col-md-8" style={{ textAlign: "left" }}>
                <h5>Ini Lho ITS! 2022</h5>
                <p>Deputy Head of Branding Division</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="Footer">2024 Baharian Diko Website</div>
    </>
  );
}

export { NavBar, ProfilResume, EducationResume, OtherCards, Footer };
