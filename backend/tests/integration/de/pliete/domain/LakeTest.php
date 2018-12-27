<?php

namespace de\pliete\domain;

use de\pliete\BaseTestCase;

class LakeControllerTest extends BaseTestCase {
    /**
     * Test that the index route won't accept a post request
     */
    public function test_get_all_available_lakes() {
        $response = $this->runApp('GET', '/api/v1/lakes');

        $this->assertEquals(200, $response->getStatusCode());
        $this->assertContains('Method not allowed', (string)$response->getBody());
    }
}
?>
