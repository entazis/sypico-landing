import React, { useState } from 'react';

import classes from './testimonials.module.css';
import {Container, Carousel, Modal, Button} from 'react-bootstrap';

export default function Testimonials() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
      <section id='testimonials' className={classes.testimonials}>
        <Container className='mb-3'>
          <div className={classes.feedbackList}>
            <div className={classes.quotesIcon}>
              <img src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADUAAAAnCAYAAACv+ADgAAAEzklEQVR42ryaaWgVVxiG772pN4t7rtGYxipGDImI1vWHuFAKKq1YC66lVANV3Ar6o7RNW7GKaGlVWm1E1P7QEBOrYH8IIhrUtmrSKih1wy0awZqYmii3Saq5vh99B4ZxljMzJz3w5OCc5bvvmbN83xmjqVQqophGg7fARtAe+f/SEHATKP/QiIhS4A2QTP2XfgZxxXZhWU+b5SBNtZ1KpUkU1A5qaKTKj5GAbKStDuZlIKpDVBH4GzwHM0EWqKaRH1WNBOAT2rgBhoFa/ntLWFE9wHV2tsz0vCc4x+ffdYKgWez7LzCIz3LAJT7/KoyoCnbyg03ZQE6Lds3rqwC0gFYw3lKWD+7wN00OImouG18EGTblG1i+TqMgWaNn2e8Km/IEaKLo/n5F9earb+Waspa/xrKbDoKDspqCDjus1TKbpaAsaisbf+7Q6FuWL9AoKA885ZvoZ1Oez6l+GcT8ipK18i+4BdJtGmSCJ5zbMY2idnOgljiUb2L5/CC73w42nufQ4B2Wf6lR0BDwjLvbKzblMhXvgQegi19R8trbPF7xdooaoVHUTo+BHOWyC3uK+oKNP3RpcIZzX9fUS9BbuebS53L+rtmq/cboAkbBB6AZlLu4inmgDnRoclbfA5lgm0ufg5n/qdqpIWocKAAHQNLN/wW9wDxQzMEIk96nx7/XpU6CeatfUTOZV3rUv8O3VcGRuw82gH4BBA0AY8AR8NilXgPz62QXeNN1QDkP/+Ba8XJ5crkDfgT20tlNcZtf6dPBXcK2ixSc6kpwymRP0gUnd8lwXMULPxJgoWfwhH9EQxU+fMH9bJPn05WayLYdZL11MOXPFHa+JsQuJr7YL+znoOIbu8dDPqjN8XTVXoq1IpxKkmaE3J4l1jrJvj71qNuL9SpD2sw2hUGfmUV9z4dFGs4dMVLPQ3ywS70JtLlWg02JterolbxunFP53DNuaTh3msAqEAelHjufLpuyO5aANPC1saUneDa1aTpQfwJXwQLQzaFOf+YPNNk8Do5yqx8monqAFo1XWnJA7wMZNGKXejJv1mi3jPkc4/Bti+hN1czHOJR39eslKKRj4BmYZIjK0izqhsVvs6ZkJ1x6JulxFMY4Wt01G3jqMVjGbWu6ZruyaWTH6L/J/M/V2HlXizhresh8oGZRoue5/LnMB8UaOy9kXudQfpv5UM2i5KhoEFGn+WCqxs4nM69xKP+d+QSNNvuCQeBihBcs4v3e13QxKT7YFUa03V3q1dLzSGiKohfTS1lpPNjMB4s1dD6bfe3xqLdcgyNtEOPdilyj5Zq9bImJGn2GAlb68I23evh+QjfwkHYHhBRlDNAO68XLChacoccdxkv/WLFNCeufDjH1R4N/GNP1tYqK8uOWpF8Z5fq5Yf3NFE74iYCrTB/zMn0KGgcaGOS+7XSZGTdFpFJ5qccIZjIeazJ98YsHeMMnTCH6SIU2cc6GNgpa6HWXHuVlvfE5tJGLfhnvJ2bxPmIfaGadFpWLe4/B2WP6cngIvMs1atTpQsGl4K5p4Kf7+T4lm8c3bOiU6nlHkKNpW54GzltsyEbymEGgkZL8kJFt109U4eu8HNDDJU7hAWfEQZfojaQ6wTkdy/8JMAq8ygDwCbgGToHDbmHLCwEGAOGGuHvQlMkBAAAAAElFTkSuQmCC" alt="icon"/>
            </div>
            <Carousel>
              <Carousel.Item>
                <div className={classes.singleFeedback}><p>Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Quis ipsum
                  suspendisse ultrices gravida. Risus commodo viverra maecenas
                  accumsan lacus vel facilisis.</p>
                  <h3>Oliver Smith</h3><span>React JS Specialist</span></div>
              </Carousel.Item>
              <Carousel.Item>
                <div className={classes.singleFeedback}><p>Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Quis ipsum suspendisse
                  ultrices gravida. Risus commodo viverra maecenas accumsan
                  lacus vel facilisis.</p>
                  <h3>John Smith</h3><span>CEO &amp; Founder, Envato</span>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </Container>

        <Button variant="danger" onClick={handleShow}>
          Read more
        </Button>

        <Modal centered show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
  );
}
