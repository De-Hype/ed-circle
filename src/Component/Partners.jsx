import codecov from '../assets/codecov.svg';
import duolingo from '../assets/duolingo.svg';
import magicleap from '../assets/magicleap.svg';
import usertesting from '../assets/usertesting.svg'

const Partners = () => {
  return (
    <div className="Partners">
        <h3><span>250+</span> <br />Collaboration</h3>
        <img src={duolingo} alt="" />
        <img src={codecov} alt="" />
        <img src={usertesting} alt="" />
        <img src={magicleap} alt="" />
    </div>
  )
}

export default Partners