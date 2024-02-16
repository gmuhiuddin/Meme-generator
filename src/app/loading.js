import { RingLoader } from 'react-spinners';

export default function Loading () {
return(
    <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh', width:'100%'}}>
        <RingLoader color="#36D7B7" loading={true} size={75} />
    </div>
)
};