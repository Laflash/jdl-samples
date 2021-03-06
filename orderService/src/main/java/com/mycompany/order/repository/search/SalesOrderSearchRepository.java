package com.mycompany.order.repository.search;

import com.mycompany.order.domain.SalesOrder;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;


/**
 * Spring Data Elasticsearch repository for the {@link SalesOrder} entity.
 */
public interface SalesOrderSearchRepository extends ElasticsearchRepository<SalesOrder, Long> {
}
