export const rsponseSuccess =(msg='',result=[],code=200,success=true)=>{
    return  {
            code: code,
            success: success,
            msg: msg,
            result: result,
        }
}
export const rsponseFail =(msg='',result=[],code=1000,success=false)=>{
    return  {
            code: code,
            success: success,
            msg: msg,
            result: result,
        }
}