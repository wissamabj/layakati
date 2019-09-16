package com.imd.bo;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;

import com.imd.entities.BaseEntity;
import com.imd.vo.BaseVO;

public class BaseBO {
	
	@Autowired
	private ModelMapper modelMapper;

	public <T extends BaseVO> List<T> mapEntityToVO(Class<T> clazz, Set<BaseEntity> entityList) throws InstantiationException, IllegalAccessException {
		List<T> list = new ArrayList<T>();
		
		for(BaseEntity entity:entityList) {
			T newClazz = clazz.newInstance();
			Method[] methods = newClazz.getClass().getMethods();
			
			
		}
		list = entityList.stream().map(s->modelMapper.map(s, clazz))
		.collect(Collectors.toList());
		
		
		return list;
	}

	public ModelMapper getModelMapper() {
		return modelMapper;
	}

	public void setModelMapper(ModelMapper modelMapper) {
		this.modelMapper = modelMapper;
	}
}
