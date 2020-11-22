package com.mycompany.order.service.mapper;


import com.mycompany.order.domain.*;
import com.mycompany.order.service.dto.SalesOrderDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link SalesOrder} and its DTO {@link SalesOrderDTO}.
 */
@Mapper(componentModel = "spring", uses = {})
public interface SalesOrderMapper extends EntityMapper<SalesOrderDTO, SalesOrder> {


    @Mapping(target = "orderItems", ignore = true)
    @Mapping(target = "removeOrderItems", ignore = true)
    SalesOrder toEntity(SalesOrderDTO salesOrderDTO);

    default SalesOrder fromId(Long id) {
        if (id == null) {
            return null;
        }
        SalesOrder salesOrder = new SalesOrder();
        salesOrder.setId(id);
        return salesOrder;
    }
}
