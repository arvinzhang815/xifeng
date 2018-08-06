package com.xifeng.kuandai.service;

import com.xifeng.kuandai.dto.AccountInfo;

/**
 * @author Created by: zhangbingbing
 * @date 2018/8/6
 **/
public interface AccountService {

    public String login(AccountInfo info) throws Exception;
}