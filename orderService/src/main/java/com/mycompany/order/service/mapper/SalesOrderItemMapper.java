package com.mycompany.order.service.mapper;


import com.mycompany.order.domain.*;
import com.mycompany.order.service.dto.SalesOrderItemDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link SalesOrderItem} and its DTO {@link SalesOrderItemDTO}.
 */
@Mapper(componentModel = "spring", uses = {SalesOrderMapper.class})
public interface SalesOrderItemMapper extends EntityMapper<SalesOrderItemDTO, SalesOrderItem> {

    @Mapping(source = "salesOrder.id", target = "salesOrderId")
    @Mapping(source = "salesOrder.salesOrderNumber", target = "salesOrderSalesOrderNumber")
    SalesOrderItemDTO toDto(SalesOrderItem salesOrderItem);

    @Mapping(source = "salesOrderId", target = "salesOrder")
    SalesOrderItem toEntity(SalesOrderItemDTO salesOrderItemDTO);

    default SalesOrderItem fromId(Long id) {
        if (id == null) {
            return null;
        }
        SalesOrderItem salesOrderItem = new SalesOrderItem();
        salesOrderItem.setId(id);
        return salesOrderItem;
    }
}
