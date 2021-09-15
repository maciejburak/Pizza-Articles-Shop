import { SRLWrapper } from "simple-react-lightbox";
// USE THE IMPORT BELOW INSTEAD IF YOU ARE USING THE PRO VERSION
// import { SRLWrapper } from 'simple-react-lightbox-pro'

function LightBox() {
  return (
    <SRLWrapper>
    <a href="/product01.jpg" className="element_with_overlay">
      <div className="overlay" srl_overlay="true">
        <h1>Funny cap</h1>
        <p>£30.00</p>
      </div>
      <img src="product/01.jpg" alt="Funny cap"/>
    </a>
    <a href="/product02.jpg" className="element_with_overlay">
      <div className="overlay" srl_overlay="true">
        <h1>Sunglasses</h1>
        <p>£90.00</p>
      </div>
      <img src="product/02.jpg" alt="Sunglasses"/>
    </a>
    <div className="element_with_overlay">
      <div className="overlay" srl_overlay="true">
        <h1>Funny cap</h1>
        <p>£30.00</p>
      </div>
      <img
        src="/product03.jpg"
        alt="Cool backpack"
      />
    </div>
    </SRLWrapper>
  )
}

export default LightBox;