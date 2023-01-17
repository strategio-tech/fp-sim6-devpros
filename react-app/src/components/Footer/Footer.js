import './footer.css'



function Footer() {
  return (
    <div className="linksContainer">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"></link>
        <p className="theDevs">Created By: </p>
        <a href="https://github.com/andrewcodes12">
        <i className="devicon-github-original"></i>
        </a>
        <p className="me">Andrew Fava</p>
        <a href="https://www.linkedin.com/in/andrewfava/">
        <i className="devicon-linkedin-plain"></i>
        </a>
    </div>
  )
}


export default Footer;
