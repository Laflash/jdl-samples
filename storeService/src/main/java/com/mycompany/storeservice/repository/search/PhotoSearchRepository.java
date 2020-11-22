package com.mycompany.storeservice.repository.search;

import com.mycompany.storeservice.domain.Photo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;


/**
 * Spring Data Elasticsearch repository for the {@link Photo} entity.
 */
public interface PhotoSearchRepository extends ElasticsearchRepository<Photo, Long> {
}
