

import '../../assets/styles/atoms'
function InpuT(props){


    return (
        <>
        <input type={props.type} id={props.id}  placeholder={props.placeholder} required   />
        </>
    );
}
export default InpuT;