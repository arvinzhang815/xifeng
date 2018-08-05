package com.xifeng.kuandai.service.impl;

import com.xifeng.kuandai.dto.Information;
import com.xifeng.kuandai.mapper.InformationMapper;
import com.xifeng.kuandai.service.KuandaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author Created by: zhangbingbing
 * @date 2018/7/5
 **/
@Service(value = "kuandaiService")
public class KuandaiServiceImpl implements KuandaiService {

    @Autowired
    public InformationMapper mapper;

    @Override
    public List<Information> queryByInfo(Information information) throws Exception {
        return mapper.queryInformation(information);
    }

    @Override
    public Information getInforById(String id) throws Exception {
        return mapper.selectByPrimaryKey(new Integer(id));
    }

    @Override
    public String insert(Information infor) throws Exception {
        String result = "fail";
        int count = mapper.insert(infor);
        if(count == 1){
            result = "success!";
        }
        return result;
    }

    @Override
    public String update(Information infor) throws Exception {
        String result = "fail";
        int count = mapper.updateByPrimaryKeySelective(infor);
        if(count == 1){
            result = "success!";
        }
        return result;
    }

    @Override
    public String delete(Information infor) throws Exception {
        String result = "fail";
        int count = mapper.deleteByPrimaryKey(new Integer(infor.getId()));
        if(count == 1){
            result = "success!";
        }
        return result;
    }


}
