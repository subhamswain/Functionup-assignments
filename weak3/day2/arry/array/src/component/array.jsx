
export function NewObjcets({indexs}){

    return(

        <div className="elements">
         <h2>{indexs.id}</h2>
         <h3>{indexs.email}</h3>
         <h3>{indexs.first_name}{indexs.last_name}</h3>
         <img src={indexs.avatar} alt="avatar"/>

        </div>
    )



}