module.exports = {
    MqHkey:{
        CurrencyDict:'CurrencyDict',
        ExchangeRate:'ExchangeRate',
        SystemInit:'SystemInit'
    },
    Error: {
        OK: function(lng){
            return {err:0, msg:locales.t('Success',{lng:lng})}
        }
        ,FAIL: function(lng){
            return {err:-1, msg:locales.t('Fail',{lng:lng})}
        }
        ,REQUIRE: function(lng, str){
            str = str || "";
            return {err:1000, msg:locales.t('TheLackOfRequired',{lng:lng})+' '+str}
        }
        ,PARAM: function(lng, str){
            str = str || "";
            return {err:1001, msg:locales.t('ParameterAnomaly',{lng:lng})+' '+str}
        }
        ,SYSTEM: function(lng){
            return {err:1002, msg:locales.t('SystemError',{lng:lng})}
        }
        ,DATA_NOT_EXIST: function(lng){
            return {err:1003, msg:locales.t('DataNotExist',{lng:lng})}
        }
        ,DATA_EXIST: function(lng){
            return {err:1004, msg:locales.t('DataExisted',{lng:lng})}
        }
    }
};
