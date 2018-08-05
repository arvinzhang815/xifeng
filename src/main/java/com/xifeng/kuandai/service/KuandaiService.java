package com.xifeng.kuandai.service;



import com.xifeng.kuandai.dto.Information;

import java.util.List;

/**
 * @author Created by: zhangbingbing
 * @date 2018/7/5
 **/
public interface KuandaiService {

    /**
     * 根据information查询
     */
    public List<Information> queryByInfo(Information infomation) throws Exception;

    /**
     * 根据id查询
     */
    public Information getInforById(String id) throws Exception;

    public String insert(Information infor) throws Exception;

    public String update(Information infor) throws Exception;

    public String delete(Information infor) throws Exception;
}
