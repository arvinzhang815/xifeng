package com.xifeng.kuandai.service.impl;

import com.xifeng.kuandai.dto.AccountInfo;
import com.xifeng.kuandai.mapper.AccountInfoMapper;
import com.xifeng.kuandai.service.AccountService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Created by: zhangbingbing
 * @date 2018/8/6
 **/
@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    private AccountInfoMapper mapper;

    @Override
    public String login(AccountInfo info) throws Exception {
        String result = "success";
        AccountInfo accountInfo = new AccountInfo();
        info = mapper.getAccountInfo(info);
        if(info == null || StringUtils.isBlank(info.getAccount())){
            result = "fail";
        }
        return result;
    }
}
